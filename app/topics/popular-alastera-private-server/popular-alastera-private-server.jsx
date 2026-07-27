import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-private-server');
}

export default function PopularAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-private-server" />;
}
