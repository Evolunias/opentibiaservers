import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death');
}

export default function NewSeasonMistOfDeathKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death" />;
}
