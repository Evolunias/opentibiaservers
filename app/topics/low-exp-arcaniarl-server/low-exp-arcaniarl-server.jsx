import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-arcaniarl-server');
}

export default function LowExpArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-arcaniarl-server" />;
}
