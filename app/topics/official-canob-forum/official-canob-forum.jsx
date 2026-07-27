import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-forum');
}

export default function OfficialCanobForumKeywordPage() {
  return <StaticKeywordPage slug="official-canob-forum" />;
}
