import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-ot');
}

export default function TopCalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-ot" />;
}
