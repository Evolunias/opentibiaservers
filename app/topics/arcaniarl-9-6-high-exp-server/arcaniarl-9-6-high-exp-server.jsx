import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-high-exp-server');
}

export default function Arcaniarl96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-high-exp-server" />;
}
