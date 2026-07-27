import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-pvp-server');
}

export default function HarmoniaOt13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-pvp-server" />;
}
