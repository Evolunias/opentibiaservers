import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-ot');
}

export default function CustomCalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-ot" />;
}
