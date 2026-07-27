import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-forum');
}

export default function CustomOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-forum" />;
}
