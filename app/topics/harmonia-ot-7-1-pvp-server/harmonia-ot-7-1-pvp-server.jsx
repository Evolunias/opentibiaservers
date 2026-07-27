import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-1-pvp-server');
}

export default function HarmoniaOt71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-1-pvp-server" />;
}
