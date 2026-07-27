import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-pvp-server');
}

export default function HarmoniaOt11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-pvp-server" />;
}
