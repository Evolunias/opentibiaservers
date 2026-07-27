import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-private-server');
}

export default function NewSeasonAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-private-server" />;
}
