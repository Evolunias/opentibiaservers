import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-low-exp-server');
}

export default function Arcaniarl15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-low-exp-server" />;
}
