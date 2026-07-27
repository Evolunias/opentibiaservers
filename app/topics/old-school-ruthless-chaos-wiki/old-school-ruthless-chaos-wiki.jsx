import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos-wiki');
}

export default function OldSchoolRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos-wiki" />;
}
