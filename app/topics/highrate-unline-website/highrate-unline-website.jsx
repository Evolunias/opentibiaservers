import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-website');
}

export default function HighrateUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-website" />;
}
