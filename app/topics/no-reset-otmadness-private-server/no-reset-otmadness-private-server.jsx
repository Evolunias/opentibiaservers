import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-private-server');
}

export default function NoResetOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-private-server" />;
}
