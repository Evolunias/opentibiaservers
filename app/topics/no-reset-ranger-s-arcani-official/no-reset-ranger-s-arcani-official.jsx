import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-official');
}

export default function NoResetRangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-official" />;
}
