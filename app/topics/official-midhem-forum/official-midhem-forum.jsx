import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-forum');
}

export default function OfficialMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-forum" />;
}
