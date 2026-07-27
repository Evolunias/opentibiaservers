import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-forum');
}

export default function NewTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-forum" />;
}
