import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-private-server');
}

export default function NewSeasonThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-private-server" />;
}
