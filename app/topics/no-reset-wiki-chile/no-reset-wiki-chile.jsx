import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-wiki-chile');
}

export default function NoResetWikiChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-wiki-chile" />;
}
