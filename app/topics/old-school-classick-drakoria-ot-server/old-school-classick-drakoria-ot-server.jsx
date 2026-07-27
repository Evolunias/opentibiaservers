import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-ot-server');
}

export default function OldSchoolClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-ot-server" />;
}
