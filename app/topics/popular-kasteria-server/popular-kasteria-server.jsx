import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-server');
}

export default function PopularKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-server" />;
}
