import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-login');
}

export default function OldSchoolClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-login" />;
}
