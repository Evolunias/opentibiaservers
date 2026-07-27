import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-server-argentina');
}

export default function HarmoniaOtPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-server-argentina" />;
}
