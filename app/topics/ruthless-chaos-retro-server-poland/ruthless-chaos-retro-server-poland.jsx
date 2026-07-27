import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-retro-server-poland');
}

export default function RuthlessChaosRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-retro-server-poland" />;
}
