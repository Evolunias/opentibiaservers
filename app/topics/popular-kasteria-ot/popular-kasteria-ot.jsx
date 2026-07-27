import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-ot');
}

export default function PopularKasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-ot" />;
}
