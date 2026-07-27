import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-forum');
}

export default function OldSchoolXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-forum" />;
}
