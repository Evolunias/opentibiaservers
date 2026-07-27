import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-forum');
}

export default function BestXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-forum" />;
}
