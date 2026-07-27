import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-retro-server-brazil');
}

export default function RuthlessChaosRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-retro-server-brazil" />;
}
