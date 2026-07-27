import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-ot');
}

export default function BestTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-ot" />;
}
