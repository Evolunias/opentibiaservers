import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-forum');
}

export default function LowrateEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-forum" />;
}
