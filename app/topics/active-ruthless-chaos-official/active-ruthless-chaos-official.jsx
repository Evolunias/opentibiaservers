import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-official');
}

export default function ActiveRuthlessChaosOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-official" />;
}
