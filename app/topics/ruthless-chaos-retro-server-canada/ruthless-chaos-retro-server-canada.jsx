import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-retro-server-canada');
}

export default function RuthlessChaosRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-retro-server-canada" />;
}
