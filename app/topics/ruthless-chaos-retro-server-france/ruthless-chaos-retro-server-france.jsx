import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-retro-server-france');
}

export default function RuthlessChaosRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-retro-server-france" />;
}
