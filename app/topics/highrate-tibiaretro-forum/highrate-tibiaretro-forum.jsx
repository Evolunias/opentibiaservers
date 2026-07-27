import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-forum');
}

export default function HighrateTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-forum" />;
}
