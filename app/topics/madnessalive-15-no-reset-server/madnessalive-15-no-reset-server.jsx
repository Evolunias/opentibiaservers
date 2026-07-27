import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-no-reset-server');
}

export default function Madnessalive15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-no-reset-server" />;
}
