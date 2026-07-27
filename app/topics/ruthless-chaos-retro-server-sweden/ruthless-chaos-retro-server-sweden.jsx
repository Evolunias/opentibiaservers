import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-retro-server-sweden');
}

export default function RuthlessChaosRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-retro-server-sweden" />;
}
