import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-ot');
}

export default function PopularNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-ot" />;
}
