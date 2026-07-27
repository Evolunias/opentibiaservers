import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-private-server');
}

export default function AlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-private-server" />;
}
