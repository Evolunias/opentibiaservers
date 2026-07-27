import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-forum');
}

export default function ThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="thornia-forum" />;
}
