import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-website');
}

export default function HighrateCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-website" />;
}
