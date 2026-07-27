import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-forum');
}

export default function CustomNilotForumKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-forum" />;
}
