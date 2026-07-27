import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-1-evo-server');
}

export default function AureraGlobal81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-1-evo-server" />;
}
