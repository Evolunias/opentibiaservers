import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-wiki');
}

export default function OldSchoolSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-wiki" />;
}
