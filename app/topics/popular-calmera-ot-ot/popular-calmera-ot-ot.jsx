import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-ot');
}

export default function PopularCalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-ot" />;
}
