import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-wiki');
}

export default function OldSchoolArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-wiki" />;
}
