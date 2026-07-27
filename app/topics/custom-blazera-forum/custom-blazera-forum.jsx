import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-forum');
}

export default function CustomBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-forum" />;
}
