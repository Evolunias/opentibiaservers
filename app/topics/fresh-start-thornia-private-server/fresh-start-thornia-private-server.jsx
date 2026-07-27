import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-private-server');
}

export default function FreshStartThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-private-server" />;
}
