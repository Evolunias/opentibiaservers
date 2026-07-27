import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-server-usa');
}

export default function HarmoniaOtPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-server-usa" />;
}
