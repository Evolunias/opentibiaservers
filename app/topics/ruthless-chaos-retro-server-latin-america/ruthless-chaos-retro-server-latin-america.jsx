import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-retro-server-latin-america');
}

export default function RuthlessChaosRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-retro-server-latin-america" />;
}
