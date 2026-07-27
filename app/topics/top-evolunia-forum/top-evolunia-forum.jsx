import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-forum');
}

export default function TopEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-forum" />;
}
