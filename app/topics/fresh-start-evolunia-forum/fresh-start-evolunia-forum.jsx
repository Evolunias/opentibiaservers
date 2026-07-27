import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-forum');
}

export default function FreshStartEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-forum" />;
}
