import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-forum');
}

export default function OfficialLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-forum" />;
}
