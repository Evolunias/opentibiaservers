import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-retro-server-germany');
}

export default function RuthlessChaosRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-retro-server-germany" />;
}
