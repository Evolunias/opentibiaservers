import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-retro-server-usa');
}

export default function RuthlessChaosRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-retro-server-usa" />;
}
