import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-forum');
}

export default function PopularEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-forum" />;
}
