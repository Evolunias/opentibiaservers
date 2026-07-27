import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-official');
}

export default function RuthlessChaosOfficialKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-official" />;
}
