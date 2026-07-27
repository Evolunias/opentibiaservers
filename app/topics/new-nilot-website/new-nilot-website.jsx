import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-website');
}

export default function NewNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-website" />;
}
