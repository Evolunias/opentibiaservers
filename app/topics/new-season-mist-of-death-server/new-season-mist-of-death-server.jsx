import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-server');
}

export default function NewSeasonMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-server" />;
}
