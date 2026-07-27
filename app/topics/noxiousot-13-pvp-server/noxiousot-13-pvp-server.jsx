import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-pvp-server');
}

export default function Noxiousot13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-pvp-server" />;
}
