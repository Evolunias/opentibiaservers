import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-private-server');
}

export default function NewSeasonNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-private-server" />;
}
