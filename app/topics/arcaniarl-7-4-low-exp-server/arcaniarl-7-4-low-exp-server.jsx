import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-low-exp-server');
}

export default function Arcaniarl74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-low-exp-server" />;
}
