import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-retro-server-north-america');
}

export default function RuthlessChaosRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-retro-server-north-america" />;
}
