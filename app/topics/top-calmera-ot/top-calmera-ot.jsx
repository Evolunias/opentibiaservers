import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot');
}

export default function TopCalmeraOtKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot" />;
}
