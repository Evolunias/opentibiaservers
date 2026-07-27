import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-no-reset-server-europe');
}

export default function MadnessaliveNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-no-reset-server-europe" />;
}
