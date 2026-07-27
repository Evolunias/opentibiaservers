import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-6-high-exp-server');
}

export default function Arcaniarl86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-6-high-exp-server" />;
}
