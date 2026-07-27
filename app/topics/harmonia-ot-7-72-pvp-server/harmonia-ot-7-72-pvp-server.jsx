import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-72-pvp-server');
}

export default function HarmoniaOt772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-72-pvp-server" />;
}
