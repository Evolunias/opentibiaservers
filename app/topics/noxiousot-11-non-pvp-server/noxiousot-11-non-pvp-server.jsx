import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-non-pvp-server');
}

export default function Noxiousot11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-non-pvp-server" />;
}
