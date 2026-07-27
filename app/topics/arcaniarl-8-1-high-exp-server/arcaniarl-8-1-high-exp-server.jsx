import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-1-high-exp-server');
}

export default function Arcaniarl81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-1-high-exp-server" />;
}
