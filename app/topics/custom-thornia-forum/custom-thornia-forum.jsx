import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-forum');
}

export default function CustomThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-forum" />;
}
