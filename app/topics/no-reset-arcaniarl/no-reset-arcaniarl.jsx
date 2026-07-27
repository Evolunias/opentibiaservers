import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl');
}

export default function NoResetArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl" />;
}
