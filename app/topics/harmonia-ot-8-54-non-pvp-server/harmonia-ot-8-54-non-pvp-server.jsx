import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-54-non-pvp-server');
}

export default function HarmoniaOt854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-54-non-pvp-server" />;
}
