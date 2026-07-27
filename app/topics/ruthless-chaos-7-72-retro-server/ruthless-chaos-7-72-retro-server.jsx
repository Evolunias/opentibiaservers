import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-72-retro-server');
}

export default function RuthlessChaos772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-72-retro-server" />;
}
