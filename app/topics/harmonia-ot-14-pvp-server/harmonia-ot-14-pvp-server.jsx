import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-pvp-server');
}

export default function HarmoniaOt14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-pvp-server" />;
}
