import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-canada-server');
}

export default function EvoleraCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-canada-server" />;
}
