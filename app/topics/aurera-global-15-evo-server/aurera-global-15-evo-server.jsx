import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-evo-server');
}

export default function AureraGlobal15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-evo-server" />;
}
