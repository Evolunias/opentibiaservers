import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-14-retro-server');
}

export default function RuthlessChaos14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-14-retro-server" />;
}
