import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-forum');
}

export default function FreshStartTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-forum" />;
}
