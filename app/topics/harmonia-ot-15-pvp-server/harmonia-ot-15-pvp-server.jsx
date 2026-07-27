import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-pvp-server');
}

export default function HarmoniaOt15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-pvp-server" />;
}
