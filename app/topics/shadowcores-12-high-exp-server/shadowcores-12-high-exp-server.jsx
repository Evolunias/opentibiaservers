import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-12-high-exp-server');
}

export default function Shadowcores12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-12-high-exp-server" />;
}
