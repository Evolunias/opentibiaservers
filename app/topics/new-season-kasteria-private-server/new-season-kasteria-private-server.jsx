import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-private-server');
}

export default function NewSeasonKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-private-server" />;
}
