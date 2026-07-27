import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-website');
}

export default function NewSeasonTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-website" />;
}
