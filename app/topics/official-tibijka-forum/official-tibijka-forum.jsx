import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-forum');
}

export default function OfficialTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-forum" />;
}
