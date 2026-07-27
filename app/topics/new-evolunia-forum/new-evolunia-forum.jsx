import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-forum');
}

export default function NewEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-forum" />;
}
