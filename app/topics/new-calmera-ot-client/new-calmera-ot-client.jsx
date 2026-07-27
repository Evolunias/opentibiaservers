import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-client');
}

export default function NewCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-client" />;
}
