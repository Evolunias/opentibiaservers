import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-4-pvp-server');
}

export default function HarmoniaOt84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-4-pvp-server" />;
}
