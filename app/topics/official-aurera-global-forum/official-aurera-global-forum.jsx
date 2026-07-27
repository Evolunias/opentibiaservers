import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-forum');
}

export default function OfficialAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-forum" />;
}
