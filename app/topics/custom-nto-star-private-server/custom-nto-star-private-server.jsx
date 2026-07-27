import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-private-server');
}

export default function CustomNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-private-server" />;
}
