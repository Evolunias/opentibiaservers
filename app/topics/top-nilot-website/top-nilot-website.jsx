import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-website');
}

export default function TopNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-website" />;
}
