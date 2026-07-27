import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-private-server');
}

export default function OfficialRuthlessChaosPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-private-server" />;
}
