import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-argentina-server');
}

export default function EvoleraArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-argentina-server" />;
}
