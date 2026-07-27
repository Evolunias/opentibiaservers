import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-private-server');
}

export default function NewSeasonXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-private-server" />;
}
