import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-forum');
}

export default function ActiveBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-forum" />;
}
