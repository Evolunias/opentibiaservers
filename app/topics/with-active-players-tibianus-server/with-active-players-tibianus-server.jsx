import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-tibianus-server');
}

export default function WithActivePlayersTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-tibianus-server" />;
}
