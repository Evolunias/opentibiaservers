import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-website');
}

export default function HighrateOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-website" />;
}
