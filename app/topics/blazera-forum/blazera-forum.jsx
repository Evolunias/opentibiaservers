import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-forum');
}

export default function BlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="blazera-forum" />;
}
