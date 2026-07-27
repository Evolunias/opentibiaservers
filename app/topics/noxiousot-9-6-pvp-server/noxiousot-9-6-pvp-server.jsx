import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-9-6-pvp-server');
}

export default function Noxiousot96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-9-6-pvp-server" />;
}
