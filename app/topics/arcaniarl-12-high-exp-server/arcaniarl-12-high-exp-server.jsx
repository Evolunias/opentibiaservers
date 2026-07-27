import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-high-exp-server');
}

export default function Arcaniarl12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-high-exp-server" />;
}
