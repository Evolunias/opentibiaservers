import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-private-server');
}

export default function NewSeasonTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-private-server" />;
}
