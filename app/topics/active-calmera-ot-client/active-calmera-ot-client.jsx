import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-client');
}

export default function ActiveCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-client" />;
}
