import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-6-pvp-server');
}

export default function HarmoniaOt86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-6-pvp-server" />;
}
