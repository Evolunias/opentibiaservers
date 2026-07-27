import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-forum');
}

export default function CustomCanobForumKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-forum" />;
}
