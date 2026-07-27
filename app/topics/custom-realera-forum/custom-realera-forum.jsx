import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-forum');
}

export default function CustomRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-forum" />;
}
