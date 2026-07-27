import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-private-server');
}

export default function NewSeasonOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-private-server" />;
}
