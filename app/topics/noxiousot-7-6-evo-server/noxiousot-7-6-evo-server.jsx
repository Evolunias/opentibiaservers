import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-6-evo-server');
}

export default function Noxiousot76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-6-evo-server" />;
}
