import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-high-exp-server');
}

export default function Arcaniarl84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-high-exp-server" />;
}
