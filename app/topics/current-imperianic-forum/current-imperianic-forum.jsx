import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-forum');
}

export default function CurrentImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-forum" />;
}
