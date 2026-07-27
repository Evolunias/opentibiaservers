import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-private-server');
}

export default function CustomAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-private-server" />;
}
