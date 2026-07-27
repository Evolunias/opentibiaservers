import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-6-retro-server');
}

export default function RuthlessChaos86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-6-retro-server" />;
}
