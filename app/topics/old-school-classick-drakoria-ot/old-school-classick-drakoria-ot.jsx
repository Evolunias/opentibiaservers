import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-ot');
}

export default function OldSchoolClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-ot" />;
}
