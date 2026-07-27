import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp');
}

export default function HarmoniaOtPvpKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp" />;
}
