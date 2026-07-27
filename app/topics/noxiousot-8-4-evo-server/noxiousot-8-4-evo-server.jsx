import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-4-evo-server');
}

export default function Noxiousot84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-4-evo-server" />;
}
