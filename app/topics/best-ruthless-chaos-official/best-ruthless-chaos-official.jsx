import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ruthless-chaos-official');
}

export default function BestRuthlessChaosOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-ruthless-chaos-official" />;
}
