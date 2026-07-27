import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-forum');
}

export default function ActiveAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-forum" />;
}
