import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-no-reset-server-sweden');
}

export default function MadnessaliveNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-no-reset-server-sweden" />;
}
