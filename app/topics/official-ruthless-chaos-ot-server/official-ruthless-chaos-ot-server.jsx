import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-ot-server');
}

export default function OfficialRuthlessChaosOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-ot-server" />;
}
