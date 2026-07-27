import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-private-server');
}

export default function NewNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-private-server" />;
}
