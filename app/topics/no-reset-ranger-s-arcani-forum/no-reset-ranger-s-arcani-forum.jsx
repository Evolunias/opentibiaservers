import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-forum');
}

export default function NoResetRangerSArcaniForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-forum" />;
}
