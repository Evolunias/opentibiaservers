import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-forum');
}

export default function CurrentTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-forum" />;
}
