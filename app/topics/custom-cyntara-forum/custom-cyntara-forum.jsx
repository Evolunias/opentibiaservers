import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-forum');
}

export default function CustomCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-forum" />;
}
