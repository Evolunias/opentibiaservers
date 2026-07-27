import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-forum');
}

export default function BestRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="best-realera-forum" />;
}
