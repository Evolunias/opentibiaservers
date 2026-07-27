import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-non-pvp-server');
}

export default function HarmoniaOt13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-non-pvp-server" />;
}
