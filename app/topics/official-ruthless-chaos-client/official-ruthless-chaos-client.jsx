import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-client');
}

export default function OfficialRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-client" />;
}
