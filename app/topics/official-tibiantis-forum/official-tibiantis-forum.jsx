import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-forum');
}

export default function OfficialTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-forum" />;
}
