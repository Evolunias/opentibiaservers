import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-no-reset-server-france');
}

export default function MadnessaliveNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-no-reset-server-france" />;
}
