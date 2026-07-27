import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-forum');
}

export default function OfficialTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-forum" />;
}
