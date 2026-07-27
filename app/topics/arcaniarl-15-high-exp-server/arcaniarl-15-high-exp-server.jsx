import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-high-exp-server');
}

export default function Arcaniarl15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-high-exp-server" />;
}
