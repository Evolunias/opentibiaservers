import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-low-exp-server');
}

export default function Madnessalive15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-low-exp-server" />;
}
