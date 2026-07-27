import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot');
}

export default function CustomCalmeraOtKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot" />;
}
