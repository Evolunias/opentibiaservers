import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-website');
}

export default function CurrentCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-website" />;
}
