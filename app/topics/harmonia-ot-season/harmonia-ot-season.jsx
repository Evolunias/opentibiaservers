import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-season');
}

export default function HarmoniaOtSeasonKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-season" />;
}
