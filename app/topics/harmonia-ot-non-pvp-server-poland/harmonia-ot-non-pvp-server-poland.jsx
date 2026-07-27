import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-non-pvp-server-poland');
}

export default function HarmoniaOtNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-non-pvp-server-poland" />;
}
