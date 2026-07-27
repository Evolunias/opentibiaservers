import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-carlinot-server');
}

export default function EvoCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="evo-carlinot-server" />;
}
