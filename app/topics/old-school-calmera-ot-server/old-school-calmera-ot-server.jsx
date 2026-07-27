import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-server');
}

export default function OldSchoolCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-server" />;
}
