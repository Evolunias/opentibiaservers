import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-website');
}

export default function PopularCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-website" />;
}
