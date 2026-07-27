import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-forum');
}

export default function BestImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-forum" />;
}
