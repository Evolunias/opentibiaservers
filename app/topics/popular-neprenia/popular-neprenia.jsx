import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia');
}

export default function PopularNepreniaKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia" />;
}
