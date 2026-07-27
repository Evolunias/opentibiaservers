import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos');
}

export default function OfficialRuthlessChaosKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos" />;
}
