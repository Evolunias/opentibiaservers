import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-website');
}

export default function OfficialNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-website" />;
}
