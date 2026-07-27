import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-no-reset-server-north-america');
}

export default function MadnessaliveNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-no-reset-server-north-america" />;
}
