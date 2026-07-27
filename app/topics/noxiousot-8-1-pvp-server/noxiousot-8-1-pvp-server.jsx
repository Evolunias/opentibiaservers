import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-1-pvp-server');
}

export default function Noxiousot81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-1-pvp-server" />;
}
