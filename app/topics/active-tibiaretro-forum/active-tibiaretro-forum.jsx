import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-forum');
}

export default function ActiveTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-forum" />;
}
