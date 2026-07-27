import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-client');
}

export default function PopularAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-client" />;
}
