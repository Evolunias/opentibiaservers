import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-client-france');
}

export default function OldSchoolClientFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-client-france" />;
}
