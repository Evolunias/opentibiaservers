import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-high-exp-server');
}

export default function Madnessalive12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-high-exp-server" />;
}
