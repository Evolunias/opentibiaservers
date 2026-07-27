import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-website');
}

export default function LowrateCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-website" />;
}
