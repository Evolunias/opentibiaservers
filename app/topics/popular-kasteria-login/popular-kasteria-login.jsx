import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-login');
}

export default function PopularKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-login" />;
}
