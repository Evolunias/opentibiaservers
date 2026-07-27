import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-private-server');
}

export default function EvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-private-server" />;
}
