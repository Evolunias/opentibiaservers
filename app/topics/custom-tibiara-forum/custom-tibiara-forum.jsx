import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-forum');
}

export default function CustomTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-forum" />;
}
