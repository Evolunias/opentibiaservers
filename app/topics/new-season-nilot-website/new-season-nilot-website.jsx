import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-website');
}

export default function NewSeasonNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-website" />;
}
