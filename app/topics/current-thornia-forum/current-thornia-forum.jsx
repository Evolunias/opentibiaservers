import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-forum');
}

export default function CurrentThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-forum" />;
}
