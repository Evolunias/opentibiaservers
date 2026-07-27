import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-high-exp-server');
}

export default function Shadowcores15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-high-exp-server" />;
}
