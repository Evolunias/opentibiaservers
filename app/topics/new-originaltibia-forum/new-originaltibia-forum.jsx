import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-forum');
}

export default function NewOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-forum" />;
}
