import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-1-pvp-server');
}

export default function HarmoniaOt81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-1-pvp-server" />;
}
