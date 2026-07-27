import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-forum');
}

export default function ActiveClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-forum" />;
}
