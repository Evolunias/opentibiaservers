import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-client');
}

export default function NoResetHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-client" />;
}
