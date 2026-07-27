import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online');
}

export default function OldSchoolZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online" />;
}
