import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-retro-server');
}

export default function RuthlessChaos15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-retro-server" />;
}
