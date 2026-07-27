import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-low-exp-server');
}

export default function Arcaniarl13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-low-exp-server" />;
}
