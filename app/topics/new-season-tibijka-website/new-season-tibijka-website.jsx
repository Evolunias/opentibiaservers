import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-website');
}

export default function NewSeasonTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-website" />;
}
