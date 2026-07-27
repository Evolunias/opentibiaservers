import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-forum');
}

export default function ActiveThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-forum" />;
}
