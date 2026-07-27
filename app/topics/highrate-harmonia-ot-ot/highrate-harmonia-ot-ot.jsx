import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-ot');
}

export default function HighrateHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-ot" />;
}
