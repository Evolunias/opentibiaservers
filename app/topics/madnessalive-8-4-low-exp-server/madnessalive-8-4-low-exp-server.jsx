import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-4-low-exp-server');
}

export default function Madnessalive84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-4-low-exp-server" />;
}
