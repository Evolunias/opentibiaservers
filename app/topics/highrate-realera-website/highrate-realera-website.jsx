import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-website');
}

export default function HighrateRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-website" />;
}
