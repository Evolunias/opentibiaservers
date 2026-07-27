import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-0-high-exp-server');
}

export default function Shadowcores80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-0-high-exp-server" />;
}
