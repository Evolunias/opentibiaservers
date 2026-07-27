import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-old-school-server-uk');
}

export default function ShadowcoresOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-old-school-server-uk" />;
}
