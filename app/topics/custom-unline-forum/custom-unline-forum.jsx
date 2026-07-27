import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-forum');
}

export default function CustomUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-forum" />;
}
