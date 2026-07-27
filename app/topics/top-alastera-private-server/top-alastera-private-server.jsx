import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-private-server');
}

export default function TopAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-private-server" />;
}
