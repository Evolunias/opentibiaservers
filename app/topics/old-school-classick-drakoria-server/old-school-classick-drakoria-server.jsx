import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-server');
}

export default function OldSchoolClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-server" />;
}
