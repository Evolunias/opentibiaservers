import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-forum');
}

export default function OfficialKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-forum" />;
}
