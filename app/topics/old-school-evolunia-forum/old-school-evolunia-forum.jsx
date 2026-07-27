import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-forum');
}

export default function OldSchoolEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-forum" />;
}
