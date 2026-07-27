import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-forum');
}

export default function ActiveTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-forum" />;
}
