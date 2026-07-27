import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-private-server');
}

export default function NewSeasonClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-private-server" />;
}
