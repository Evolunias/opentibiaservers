import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-client');
}

export default function FreshStartCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-client" />;
}
