import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-forum');
}

export default function NewSeasonMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-forum" />;
}
