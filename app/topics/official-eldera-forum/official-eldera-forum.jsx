import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-forum');
}

export default function OfficialElderaForumKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-forum" />;
}
