import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-forum');
}

export default function BestTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-forum" />;
}
