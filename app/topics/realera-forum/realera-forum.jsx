import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-forum');
}

export default function RealeraForumKeywordPage() {
  return <StaticKeywordPage slug="realera-forum" />;
}
