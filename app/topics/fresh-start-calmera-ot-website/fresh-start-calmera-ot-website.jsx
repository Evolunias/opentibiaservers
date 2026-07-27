import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-website');
}

export default function FreshStartCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-website" />;
}
