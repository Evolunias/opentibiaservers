import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-guide');
}

export default function ActiveNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-guide" />;
}
