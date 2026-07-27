import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-forum');
}

export default function OfficialAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-forum" />;
}
