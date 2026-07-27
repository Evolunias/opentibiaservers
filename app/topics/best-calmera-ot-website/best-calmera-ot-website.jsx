import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-website');
}

export default function BestCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-website" />;
}
