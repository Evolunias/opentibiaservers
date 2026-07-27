import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-forum');
}

export default function TopXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-forum" />;
}
