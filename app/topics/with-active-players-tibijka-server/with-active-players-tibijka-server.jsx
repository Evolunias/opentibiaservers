import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-tibijka-server');
}

export default function WithActivePlayersTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-tibijka-server" />;
}
