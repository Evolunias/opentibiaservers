import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-website');
}

export default function NewSeasonNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-website" />;
}
