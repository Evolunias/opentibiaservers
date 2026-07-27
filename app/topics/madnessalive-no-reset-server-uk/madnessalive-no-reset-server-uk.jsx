import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-no-reset-server-uk');
}

export default function MadnessaliveNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-no-reset-server-uk" />;
}
