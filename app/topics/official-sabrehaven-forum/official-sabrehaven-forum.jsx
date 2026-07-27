import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-forum');
}

export default function OfficialSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-forum" />;
}
