import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-forum');
}

export default function OfficialClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-forum" />;
}
