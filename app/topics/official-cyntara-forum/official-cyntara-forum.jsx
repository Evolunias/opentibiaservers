import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-forum');
}

export default function OfficialCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-forum" />;
}
