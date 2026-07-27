import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-demolidores-server');
}

export default function WithActivePlayersDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-demolidores-server" />;
}
