import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-forum');
}

export default function FreshStartXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-forum" />;
}
