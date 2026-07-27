import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-retro-server-south-america');
}

export default function RuthlessChaosRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-retro-server-south-america" />;
}
