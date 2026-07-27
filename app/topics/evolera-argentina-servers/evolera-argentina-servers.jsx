import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-argentina-servers');
}

export default function EvoleraArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-argentina-servers" />;
}
