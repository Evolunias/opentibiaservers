import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-6-pvp-server');
}

export default function HarmoniaOt76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-6-pvp-server" />;
}
