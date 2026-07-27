import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-ots');
}

export default function OfficialRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-ots" />;
}
