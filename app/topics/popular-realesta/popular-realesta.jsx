import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta');
}

export default function PopularRealestaKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta" />;
}
