import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-evo-server');
}

export default function Noxiousot14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-evo-server" />;
}
