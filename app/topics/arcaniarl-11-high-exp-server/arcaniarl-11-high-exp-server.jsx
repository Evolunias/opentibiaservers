import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-high-exp-server');
}

export default function Arcaniarl11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-high-exp-server" />;
}
