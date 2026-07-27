import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-private-server');
}

export default function TopThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-private-server" />;
}
