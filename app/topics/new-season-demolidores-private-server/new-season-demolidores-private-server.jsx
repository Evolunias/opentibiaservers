import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-private-server');
}

export default function NewSeasonDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-private-server" />;
}
