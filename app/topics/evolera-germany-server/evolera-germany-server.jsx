import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-germany-server');
}

export default function EvoleraGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-germany-server" />;
}
