import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-low-exp-server');
}

export default function Arcaniarl96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-low-exp-server" />;
}
