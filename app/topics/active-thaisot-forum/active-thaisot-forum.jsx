import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-forum');
}

export default function ActiveThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-forum" />;
}
