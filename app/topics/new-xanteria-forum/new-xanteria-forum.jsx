import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-forum');
}

export default function NewXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-forum" />;
}
