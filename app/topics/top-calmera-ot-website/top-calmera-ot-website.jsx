import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-website');
}

export default function TopCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-website" />;
}
