import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-website');
}

export default function HighrateAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-website" />;
}
