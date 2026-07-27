import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-private-server');
}

export default function ActiveNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-private-server" />;
}
