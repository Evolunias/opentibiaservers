import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-guide');
}

export default function TopNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-guide" />;
}
