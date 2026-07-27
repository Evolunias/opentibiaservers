import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-client');
}

export default function OldSchoolCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-client" />;
}
