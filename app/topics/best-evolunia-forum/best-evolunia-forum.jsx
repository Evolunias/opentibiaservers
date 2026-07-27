import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-forum');
}

export default function BestEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-forum" />;
}
