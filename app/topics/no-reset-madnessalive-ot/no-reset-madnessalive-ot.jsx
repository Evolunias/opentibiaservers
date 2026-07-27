import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-ot');
}

export default function NoResetMadnessaliveOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-ot" />;
}
