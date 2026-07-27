import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-high-exp-server');
}

export default function Shadowcores11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-high-exp-server" />;
}
