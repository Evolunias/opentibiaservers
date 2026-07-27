import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-client');
}

export default function OfficialCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-client" />;
}
