import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eternal-odyssey-ot');
}

export default function NewSeasonEternalOdysseyOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-eternal-odyssey-ot" />;
}
