import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-forum');
}

export default function NoResetEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-forum" />;
}
