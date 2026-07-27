import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-server');
}

export default function OfficialRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-server" />;
}
