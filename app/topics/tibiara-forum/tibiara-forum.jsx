import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-forum');
}

export default function TibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="tibiara-forum" />;
}
