import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-ots');
}

export default function NewSeasonMistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-ots" />;
}
