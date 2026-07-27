import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-private-server');
}

export default function OfficialThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-private-server" />;
}
