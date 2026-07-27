import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria');
}

export default function OldSchoolClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria" />;
}
