import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-forum');
}

export default function NewSeasonTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-forum" />;
}
