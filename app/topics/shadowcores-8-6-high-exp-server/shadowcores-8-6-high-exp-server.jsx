import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-6-high-exp-server');
}

export default function Shadowcores86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-6-high-exp-server" />;
}
