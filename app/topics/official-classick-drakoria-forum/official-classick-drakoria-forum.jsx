import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-forum');
}

export default function OfficialClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-forum" />;
}
