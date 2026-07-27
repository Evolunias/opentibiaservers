import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-forum');
}

export default function NewSeasonCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-forum" />;
}
