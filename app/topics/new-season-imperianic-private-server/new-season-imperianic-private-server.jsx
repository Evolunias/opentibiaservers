import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-private-server');
}

export default function NewSeasonImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-private-server" />;
}
