import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-private-server');
}

export default function NewSeasonTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-private-server" />;
}
