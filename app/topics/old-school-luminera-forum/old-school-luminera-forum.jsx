import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-forum');
}

export default function OldSchoolLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-forum" />;
}
