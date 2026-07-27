import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eternal-odyssey-ots');
}

export default function NewSeasonEternalOdysseyOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-eternal-odyssey-ots" />;
}
