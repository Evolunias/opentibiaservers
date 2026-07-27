import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-forum');
}

export default function HighrateEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-forum" />;
}
