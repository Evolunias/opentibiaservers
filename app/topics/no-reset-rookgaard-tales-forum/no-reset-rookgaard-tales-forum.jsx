import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-forum');
}

export default function NoResetRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-forum" />;
}
