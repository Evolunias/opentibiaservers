import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-guide');
}

export default function LowrateNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-guide" />;
}
