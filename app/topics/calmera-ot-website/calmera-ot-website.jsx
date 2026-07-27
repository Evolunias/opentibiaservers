import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-website');
}

export default function CalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-website" />;
}
