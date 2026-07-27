import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-no-reset-server-germany');
}

export default function MadnessaliveNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-no-reset-server-germany" />;
}
