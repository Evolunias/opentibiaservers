import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-private-server');
}

export default function NewSeasonNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-private-server" />;
}
