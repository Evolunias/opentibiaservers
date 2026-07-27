import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-forum');
}

export default function ActiveUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="active-unline-forum" />;
}
