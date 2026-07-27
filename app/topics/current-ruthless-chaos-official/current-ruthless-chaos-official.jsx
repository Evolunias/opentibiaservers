import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-official');
}

export default function CurrentRuthlessChaosOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-official" />;
}
