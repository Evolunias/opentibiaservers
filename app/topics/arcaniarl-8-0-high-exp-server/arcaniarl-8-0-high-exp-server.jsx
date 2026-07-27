import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-0-high-exp-server');
}

export default function Arcaniarl80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-0-high-exp-server" />;
}
