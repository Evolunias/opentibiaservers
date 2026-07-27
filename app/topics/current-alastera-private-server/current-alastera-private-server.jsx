import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-private-server');
}

export default function CurrentAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-private-server" />;
}
