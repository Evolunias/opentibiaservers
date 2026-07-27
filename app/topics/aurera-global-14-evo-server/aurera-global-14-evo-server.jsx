import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-evo-server');
}

export default function AureraGlobal14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-evo-server" />;
}
