import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-website');
}

export default function HighrateAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-website" />;
}
