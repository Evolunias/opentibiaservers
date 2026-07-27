import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-login');
}

export default function OfficialRuthlessChaosLoginKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-login" />;
}
