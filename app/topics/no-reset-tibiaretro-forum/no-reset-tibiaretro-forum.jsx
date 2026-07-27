import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-forum');
}

export default function NoResetTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-forum" />;
}
