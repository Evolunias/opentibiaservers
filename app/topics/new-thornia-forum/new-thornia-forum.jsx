import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-forum');
}

export default function NewThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-forum" />;
}
