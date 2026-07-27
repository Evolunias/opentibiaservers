import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-1-high-exp-server');
}

export default function Arcaniarl71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-1-high-exp-server" />;
}
