import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-client');
}

export default function NoResetMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-client" />;
}
