import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-evolera-server');
}

export default function EvoEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="evo-evolera-server" />;
}
