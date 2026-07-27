import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-forum');
}

export default function OfficialTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-forum" />;
}
