import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-forum');
}

export default function KasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="kasteria-forum" />;
}
