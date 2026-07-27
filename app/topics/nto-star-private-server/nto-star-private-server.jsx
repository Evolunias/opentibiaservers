import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-private-server');
}

export default function NtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-private-server" />;
}
