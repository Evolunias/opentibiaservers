import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-ot-server');
}

export default function OldSchoolCalmeraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-ot-server" />;
}
