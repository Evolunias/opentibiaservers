import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-high-exp-server');
}

export default function Arcaniarl13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-high-exp-server" />;
}
