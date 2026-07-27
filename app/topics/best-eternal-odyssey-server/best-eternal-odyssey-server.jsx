import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-server');
}

export default function BestEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-server" />;
}
