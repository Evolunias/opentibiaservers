import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-1-retro-server');
}

export default function RuthlessChaos71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-1-retro-server" />;
}
