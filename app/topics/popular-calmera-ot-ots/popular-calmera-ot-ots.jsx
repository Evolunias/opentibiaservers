import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-ots');
}

export default function PopularCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-ots" />;
}
