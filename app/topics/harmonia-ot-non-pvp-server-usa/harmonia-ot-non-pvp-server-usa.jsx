import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-non-pvp-server-usa');
}

export default function HarmoniaOtNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-non-pvp-server-usa" />;
}
