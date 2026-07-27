import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-client');
}

export default function TopCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-client" />;
}
