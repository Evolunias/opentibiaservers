import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-forum');
}

export default function NewSeasonSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-forum" />;
}
