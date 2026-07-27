import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-forum');
}

export default function EvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="evolunia-forum" />;
}
