import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-server-poland');
}

export default function HarmoniaOtPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-server-poland" />;
}
