import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-website');
}

export default function HighrateKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-website" />;
}
