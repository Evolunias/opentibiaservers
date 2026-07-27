import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-ot-server');
}

export default function NoResetOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-ot-server" />;
}
