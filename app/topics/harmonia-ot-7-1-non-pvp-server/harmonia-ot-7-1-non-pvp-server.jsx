import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-1-non-pvp-server');
}

export default function HarmoniaOt71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-1-non-pvp-server" />;
}
