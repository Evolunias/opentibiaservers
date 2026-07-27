import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-client');
}

export default function CalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-client" />;
}
