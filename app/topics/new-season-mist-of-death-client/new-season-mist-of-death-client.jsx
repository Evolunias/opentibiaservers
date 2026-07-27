import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-client');
}

export default function NewSeasonMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-client" />;
}
