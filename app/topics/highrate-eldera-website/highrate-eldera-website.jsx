import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-website');
}

export default function HighrateElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-website" />;
}
