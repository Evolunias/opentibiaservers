import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-10-0-retro-server');
}

export default function RuthlessChaos100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-10-0-retro-server" />;
}
