import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-high-exp-server');
}

export default function Shadowcores96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-high-exp-server" />;
}
