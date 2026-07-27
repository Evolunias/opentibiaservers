import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-website');
}

export default function CustomCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-website" />;
}
