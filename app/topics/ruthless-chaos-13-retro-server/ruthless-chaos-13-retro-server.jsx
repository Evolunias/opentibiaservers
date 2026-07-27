import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-13-retro-server');
}

export default function RuthlessChaos13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-13-retro-server" />;
}
