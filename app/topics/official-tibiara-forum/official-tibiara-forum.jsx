import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-forum');
}

export default function OfficialTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-forum" />;
}
