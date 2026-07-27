import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-forum');
}

export default function NewMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-forum" />;
}
