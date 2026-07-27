import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-forum');
}

export default function OldSchoolImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-forum" />;
}
