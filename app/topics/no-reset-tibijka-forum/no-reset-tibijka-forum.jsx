import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-forum');
}

export default function NoResetTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-forum" />;
}
