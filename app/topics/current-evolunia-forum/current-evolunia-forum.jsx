import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-forum');
}

export default function CurrentEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-forum" />;
}
