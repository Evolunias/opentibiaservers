import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-high-exp-server');
}

export default function Shadowcores71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-high-exp-server" />;
}
