import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-tibiascape-server');
}

export default function WithActivePlayersTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-tibiascape-server" />;
}
