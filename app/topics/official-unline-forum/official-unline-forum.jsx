import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-forum');
}

export default function OfficialUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="official-unline-forum" />;
}
