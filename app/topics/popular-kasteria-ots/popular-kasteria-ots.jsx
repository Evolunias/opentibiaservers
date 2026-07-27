import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-ots');
}

export default function PopularKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-ots" />;
}
