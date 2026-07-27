import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot');
}

export default function HighrateHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot" />;
}
