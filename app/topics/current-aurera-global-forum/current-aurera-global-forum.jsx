import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-forum');
}

export default function CurrentAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-forum" />;
}
