import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-website');
}

export default function HighrateNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-website" />;
}
