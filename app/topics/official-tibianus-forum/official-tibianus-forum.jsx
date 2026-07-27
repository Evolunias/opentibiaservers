import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-forum');
}

export default function OfficialTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-forum" />;
}
