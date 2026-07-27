import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-forum');
}

export default function ActiveCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-forum" />;
}
