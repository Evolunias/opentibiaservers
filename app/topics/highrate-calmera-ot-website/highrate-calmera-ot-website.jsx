import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-website');
}

export default function HighrateCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-website" />;
}
