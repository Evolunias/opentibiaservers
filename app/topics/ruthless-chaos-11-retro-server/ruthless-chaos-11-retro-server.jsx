import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-11-retro-server');
}

export default function RuthlessChaos11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-11-retro-server" />;
}
