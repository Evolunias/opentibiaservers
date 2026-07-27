import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-ots');
}

export default function CustomCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-ots" />;
}
