import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-11-low-exp-server');
}

export default function Madnessalive11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-11-low-exp-server" />;
}
