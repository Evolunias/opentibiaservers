import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-private-server');
}

export default function NewSeasonMistOfDeathPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-private-server" />;
}
