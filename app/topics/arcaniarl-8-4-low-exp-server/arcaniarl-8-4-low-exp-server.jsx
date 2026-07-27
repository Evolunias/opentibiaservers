import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-low-exp-server');
}

export default function Arcaniarl84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-low-exp-server" />;
}
