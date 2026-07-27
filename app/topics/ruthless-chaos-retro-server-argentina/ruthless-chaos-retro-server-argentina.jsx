import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-retro-server-argentina');
}

export default function RuthlessChaosRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-retro-server-argentina" />;
}
