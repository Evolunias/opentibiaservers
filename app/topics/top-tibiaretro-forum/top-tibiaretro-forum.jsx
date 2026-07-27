import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-forum');
}

export default function TopTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-forum" />;
}
