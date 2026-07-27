import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-rules');
}

export default function OldSchoolVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-rules" />;
}
