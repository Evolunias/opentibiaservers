import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-website');
}

export default function HighrateThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-website" />;
}
