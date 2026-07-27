import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-private-server');
}

export default function ThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-private-server" />;
}
