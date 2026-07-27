import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-non-pvp-server');
}

export default function HarmoniaOt12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-non-pvp-server" />;
}
