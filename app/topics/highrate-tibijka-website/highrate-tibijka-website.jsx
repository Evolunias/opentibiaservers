import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-website');
}

export default function HighrateTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-website" />;
}
