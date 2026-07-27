import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-6-pvp-server');
}

export default function Noxiousot86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-6-pvp-server" />;
}
