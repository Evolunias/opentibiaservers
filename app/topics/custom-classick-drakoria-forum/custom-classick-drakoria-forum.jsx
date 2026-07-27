import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-forum');
}

export default function CustomClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-forum" />;
}
