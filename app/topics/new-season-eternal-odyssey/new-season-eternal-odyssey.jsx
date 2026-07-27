import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eternal-odyssey');
}

export default function NewSeasonEternalOdysseyKeywordPage() {
  return <StaticKeywordPage slug="new-season-eternal-odyssey" />;
}
