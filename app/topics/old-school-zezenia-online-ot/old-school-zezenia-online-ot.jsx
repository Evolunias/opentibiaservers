import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online-ot');
}

export default function OldSchoolZezeniaOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online-ot" />;
}
