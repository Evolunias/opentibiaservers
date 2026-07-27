import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-online');
}

export default function OldSchoolAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-online" />;
}
