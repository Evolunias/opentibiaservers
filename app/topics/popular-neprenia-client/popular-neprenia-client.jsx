import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-client');
}

export default function PopularNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-client" />;
}
