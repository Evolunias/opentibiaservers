import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-forum');
}

export default function OfficialEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-forum" />;
}
