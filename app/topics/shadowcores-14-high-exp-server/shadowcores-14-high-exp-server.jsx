import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-high-exp-server');
}

export default function Shadowcores14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-high-exp-server" />;
}
