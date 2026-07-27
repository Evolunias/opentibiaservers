import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-forum');
}

export default function ActiveEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-forum" />;
}
