import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-website');
}

export default function HighrateNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-website" />;
}
