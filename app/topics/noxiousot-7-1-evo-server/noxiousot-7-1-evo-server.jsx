import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-1-evo-server');
}

export default function Noxiousot71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-1-evo-server" />;
}
