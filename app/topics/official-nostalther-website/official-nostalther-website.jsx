import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-website');
}

export default function OfficialNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-website" />;
}
