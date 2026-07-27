import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-website');
}

export default function FreshStartNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-website" />;
}
