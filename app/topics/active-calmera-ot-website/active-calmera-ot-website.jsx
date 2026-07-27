import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-website');
}

export default function ActiveCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-website" />;
}
