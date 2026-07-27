import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-website');
}

export default function CurrentNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-website" />;
}
