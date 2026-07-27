import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eternal-odyssey-website');
}

export default function NewSeasonEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-eternal-odyssey-website" />;
}
