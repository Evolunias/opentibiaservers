import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-official');
}

export default function OfficialRuthlessChaosOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-official" />;
}
