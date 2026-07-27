import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-forum');
}

export default function ActiveNilotForumKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-forum" />;
}
