import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-chile-server');
}

export default function EvoleraChileServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-chile-server" />;
}
