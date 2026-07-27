import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-evo-server');
}

export default function AureraGlobal11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-evo-server" />;
}
