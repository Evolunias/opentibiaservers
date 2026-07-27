import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia-forum');
}

export default function FreshStartOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia-forum" />;
}
