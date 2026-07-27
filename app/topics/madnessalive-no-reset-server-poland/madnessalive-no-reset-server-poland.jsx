import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-no-reset-server-poland');
}

export default function MadnessaliveNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-no-reset-server-poland" />;
}
