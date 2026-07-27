import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-france');
}

export default function OldSchoolStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-france" />;
}
