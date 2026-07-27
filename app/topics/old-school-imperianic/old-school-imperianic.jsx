import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic');
}

export default function OldSchoolImperianicKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic" />;
}
