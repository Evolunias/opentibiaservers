import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-high-exp-server');
}

export default function Shadowcores13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-high-exp-server" />;
}
