import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-website');
}

export default function NewSeasonMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-website" />;
}
