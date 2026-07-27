import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-forum');
}

export default function OfficialDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-forum" />;
}
