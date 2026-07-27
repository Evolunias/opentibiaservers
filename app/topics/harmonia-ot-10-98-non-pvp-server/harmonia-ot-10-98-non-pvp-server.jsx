import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-10-98-non-pvp-server');
}

export default function HarmoniaOt1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-10-98-non-pvp-server" />;
}
