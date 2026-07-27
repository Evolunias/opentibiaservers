import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-website');
}

export default function PopularNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-website" />;
}
