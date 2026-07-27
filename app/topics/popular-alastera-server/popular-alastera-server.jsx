import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-server');
}

export default function PopularAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-server" />;
}
