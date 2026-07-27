import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-official');
}

export default function CustomRuthlessChaosOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-official" />;
}
