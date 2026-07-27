import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-tibiame-server');
}

export default function WithActivePlayersTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-tibiame-server" />;
}
