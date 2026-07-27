import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-official');
}

export default function NoResetArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-official" />;
}
