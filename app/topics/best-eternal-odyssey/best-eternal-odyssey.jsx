import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey');
}

export default function BestEternalOdysseyKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey" />;
}
