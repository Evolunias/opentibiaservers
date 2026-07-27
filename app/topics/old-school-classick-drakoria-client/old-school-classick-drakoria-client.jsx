import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-client');
}

export default function OldSchoolClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-client" />;
}
