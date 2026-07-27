import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-10-0-low-exp-server');
}

export default function Madnessalive100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-10-0-low-exp-server" />;
}
