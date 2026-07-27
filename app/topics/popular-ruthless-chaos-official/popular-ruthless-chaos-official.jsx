import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-official');
}

export default function PopularRuthlessChaosOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-official" />;
}
