import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-0-low-exp-server');
}

export default function Madnessalive80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-0-low-exp-server" />;
}
