import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-official');
}

export default function TopRuthlessChaosOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-official" />;
}
