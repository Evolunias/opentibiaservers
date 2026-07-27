import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-11-no-reset-server');
}

export default function Madnessalive11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-11-no-reset-server" />;
}
