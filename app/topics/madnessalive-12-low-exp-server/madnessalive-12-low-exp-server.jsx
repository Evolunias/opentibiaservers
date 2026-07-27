import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-low-exp-server');
}

export default function Madnessalive12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-low-exp-server" />;
}
