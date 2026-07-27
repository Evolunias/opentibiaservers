import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-forum');
}

export default function FreshStartSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-forum" />;
}
