import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-private-server');
}

export default function ActiveThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-private-server" />;
}
