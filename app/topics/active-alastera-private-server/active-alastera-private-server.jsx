import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-private-server');
}

export default function ActiveAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-private-server" />;
}
