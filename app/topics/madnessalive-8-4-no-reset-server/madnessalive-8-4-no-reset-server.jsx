import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-4-no-reset-server');
}

export default function Madnessalive84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-4-no-reset-server" />;
}
