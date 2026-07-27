import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-client');
}

export default function CustomCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-client" />;
}
