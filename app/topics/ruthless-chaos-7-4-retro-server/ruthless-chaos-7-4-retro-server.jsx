import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-4-retro-server');
}

export default function RuthlessChaos74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-4-retro-server" />;
}
