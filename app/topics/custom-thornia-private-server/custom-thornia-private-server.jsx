import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-private-server');
}

export default function CustomThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-private-server" />;
}
