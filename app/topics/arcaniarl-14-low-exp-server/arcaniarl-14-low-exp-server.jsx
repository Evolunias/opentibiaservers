import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-low-exp-server');
}

export default function Arcaniarl14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-low-exp-server" />;
}
