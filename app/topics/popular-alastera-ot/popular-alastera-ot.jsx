import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-ot');
}

export default function PopularAlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-ot" />;
}
