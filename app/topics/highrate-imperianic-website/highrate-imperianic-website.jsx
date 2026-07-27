import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-website');
}

export default function HighrateImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-website" />;
}
