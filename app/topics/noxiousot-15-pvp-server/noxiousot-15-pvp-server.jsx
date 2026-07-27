import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-pvp-server');
}

export default function Noxiousot15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-pvp-server" />;
}
