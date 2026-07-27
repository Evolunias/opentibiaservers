import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-pvp-server');
}

export default function Noxiousot12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-pvp-server" />;
}
