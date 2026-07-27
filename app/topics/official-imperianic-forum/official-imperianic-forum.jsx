import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-forum');
}

export default function OfficialImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-forum" />;
}
