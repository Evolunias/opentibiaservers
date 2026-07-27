import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-official');
}

export default function NoResetMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-official" />;
}
