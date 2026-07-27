import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-forum');
}

export default function AureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-forum" />;
}
