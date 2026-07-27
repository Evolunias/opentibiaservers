import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-forum');
}

export default function OriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-forum" />;
}
