import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-tibiara-server');
}

export default function WithActivePlayersTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-tibiara-server" />;
}
