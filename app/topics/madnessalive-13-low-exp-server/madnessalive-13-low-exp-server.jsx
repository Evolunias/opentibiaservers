import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-13-low-exp-server');
}

export default function Madnessalive13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-13-low-exp-server" />;
}
