import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-forum');
}

export default function PopularTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-forum" />;
}
