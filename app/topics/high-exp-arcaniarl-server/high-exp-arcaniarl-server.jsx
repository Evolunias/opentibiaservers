import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-arcaniarl-server');
}

export default function HighExpArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-arcaniarl-server" />;
}
