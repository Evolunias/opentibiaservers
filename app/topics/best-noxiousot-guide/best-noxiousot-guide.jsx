import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-guide');
}

export default function BestNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-guide" />;
}
