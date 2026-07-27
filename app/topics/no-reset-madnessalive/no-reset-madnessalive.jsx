import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive');
}

export default function NoResetMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive" />;
}
