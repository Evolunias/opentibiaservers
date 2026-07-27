import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-client');
}

export default function BestEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-client" />;
}
