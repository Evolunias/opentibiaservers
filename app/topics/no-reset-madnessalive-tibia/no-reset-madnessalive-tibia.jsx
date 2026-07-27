import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-tibia');
}

export default function NoResetMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-tibia" />;
}
