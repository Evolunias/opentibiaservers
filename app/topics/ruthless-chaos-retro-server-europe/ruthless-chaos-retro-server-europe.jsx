import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-retro-server-europe');
}

export default function RuthlessChaosRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-retro-server-europe" />;
}
