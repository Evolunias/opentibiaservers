import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-no-reset-server');
}

export default function Madnessalive12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-no-reset-server" />;
}
