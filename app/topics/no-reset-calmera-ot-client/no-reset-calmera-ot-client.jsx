import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-client');
}

export default function NoResetCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-client" />;
}
