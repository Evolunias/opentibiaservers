import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-forum');
}

export default function NewSeasonEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-forum" />;
}
