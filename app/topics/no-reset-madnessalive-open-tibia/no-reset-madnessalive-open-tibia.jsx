import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-open-tibia');
}

export default function NoResetMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-open-tibia" />;
}
