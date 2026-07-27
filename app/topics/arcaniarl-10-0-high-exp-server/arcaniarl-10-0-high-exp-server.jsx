import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-high-exp-server');
}

export default function Arcaniarl100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-high-exp-server" />;
}
