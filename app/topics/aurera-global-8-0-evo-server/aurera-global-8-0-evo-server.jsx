import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-0-evo-server');
}

export default function AureraGlobal80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-0-evo-server" />;
}
