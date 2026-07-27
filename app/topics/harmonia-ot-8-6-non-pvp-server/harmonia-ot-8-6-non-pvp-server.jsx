import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-6-non-pvp-server');
}

export default function HarmoniaOt86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-6-non-pvp-server" />;
}
