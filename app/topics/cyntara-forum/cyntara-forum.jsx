import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-forum');
}

export default function CyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="cyntara-forum" />;
}
