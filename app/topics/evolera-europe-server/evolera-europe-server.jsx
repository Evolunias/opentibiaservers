import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-europe-server');
}

export default function EvoleraEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-europe-server" />;
}
