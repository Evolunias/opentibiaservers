import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-forum');
}

export default function OfficialThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-forum" />;
}
