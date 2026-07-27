import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-server');
}

export default function NoResetOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-server" />;
}
