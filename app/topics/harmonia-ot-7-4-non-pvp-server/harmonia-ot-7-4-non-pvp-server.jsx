import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-4-non-pvp-server');
}

export default function HarmoniaOt74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-4-non-pvp-server" />;
}
