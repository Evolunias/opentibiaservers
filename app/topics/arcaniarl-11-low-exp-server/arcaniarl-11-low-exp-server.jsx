import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-low-exp-server');
}

export default function Arcaniarl11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-low-exp-server" />;
}
