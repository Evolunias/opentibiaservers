import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-ot');
}

export default function OfficialRuthlessChaosOtKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-ot" />;
}
