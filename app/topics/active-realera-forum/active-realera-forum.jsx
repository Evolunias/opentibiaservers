import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-forum');
}

export default function ActiveRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="active-realera-forum" />;
}
