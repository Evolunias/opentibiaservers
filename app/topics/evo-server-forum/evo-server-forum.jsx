import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-forum');
}

export default function EvoServerForumKeywordPage() {
  return <StaticKeywordPage slug="evo-server-forum" />;
}
