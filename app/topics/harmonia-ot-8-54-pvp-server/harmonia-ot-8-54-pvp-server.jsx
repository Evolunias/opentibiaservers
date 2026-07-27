import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-54-pvp-server');
}

export default function HarmoniaOt854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-54-pvp-server" />;
}
