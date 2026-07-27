import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-forum');
}

export default function NewAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-forum" />;
}
