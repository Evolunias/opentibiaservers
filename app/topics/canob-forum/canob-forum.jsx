import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-forum');
}

export default function CanobForumKeywordPage() {
  return <StaticKeywordPage slug="canob-forum" />;
}
