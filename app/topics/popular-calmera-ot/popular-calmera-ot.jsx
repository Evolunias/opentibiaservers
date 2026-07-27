import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot');
}

export default function PopularCalmeraOtKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot" />;
}
