import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-client');
}

export default function PopularCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-client" />;
}
