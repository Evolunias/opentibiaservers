import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-13-no-reset-server');
}

export default function Madnessalive13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-13-no-reset-server" />;
}
