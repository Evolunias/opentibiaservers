import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-website');
}

export default function HighrateHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-website" />;
}
