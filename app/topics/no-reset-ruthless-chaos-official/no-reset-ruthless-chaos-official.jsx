import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-official');
}

export default function NoResetRuthlessChaosOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-official" />;
}
