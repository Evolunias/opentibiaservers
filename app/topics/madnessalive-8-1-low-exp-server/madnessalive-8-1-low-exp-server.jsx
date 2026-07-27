import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-1-low-exp-server');
}

export default function Madnessalive81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-1-low-exp-server" />;
}
