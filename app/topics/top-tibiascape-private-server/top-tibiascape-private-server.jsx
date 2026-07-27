import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-private-server');
}

export default function TopTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-private-server" />;
}
