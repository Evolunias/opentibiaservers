import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-forum');
}

export default function LowrateTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-forum" />;
}
