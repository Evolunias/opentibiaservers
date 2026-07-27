import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-9-6-retro-server');
}

export default function RuthlessChaos96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-9-6-retro-server" />;
}
