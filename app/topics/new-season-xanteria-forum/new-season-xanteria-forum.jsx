import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-forum');
}

export default function NewSeasonXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-forum" />;
}
