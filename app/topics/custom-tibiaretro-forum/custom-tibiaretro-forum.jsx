import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-forum');
}

export default function CustomTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-forum" />;
}
