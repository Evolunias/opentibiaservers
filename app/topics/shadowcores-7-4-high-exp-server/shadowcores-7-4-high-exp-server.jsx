import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-high-exp-server');
}

export default function Shadowcores74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-high-exp-server" />;
}
