import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria');
}

export default function PopularKasteriaKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria" />;
}
