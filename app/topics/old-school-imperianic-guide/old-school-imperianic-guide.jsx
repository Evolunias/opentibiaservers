import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-guide');
}

export default function OldSchoolImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-guide" />;
}
