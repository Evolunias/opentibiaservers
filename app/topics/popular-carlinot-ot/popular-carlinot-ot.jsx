import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-ot');
}

export default function PopularCarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-ot" />;
}
