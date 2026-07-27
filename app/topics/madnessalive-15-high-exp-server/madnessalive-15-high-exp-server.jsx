import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-high-exp-server');
}

export default function Madnessalive15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-high-exp-server" />;
}
