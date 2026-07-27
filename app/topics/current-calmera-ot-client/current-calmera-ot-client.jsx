import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-client');
}

export default function CurrentCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-client" />;
}
