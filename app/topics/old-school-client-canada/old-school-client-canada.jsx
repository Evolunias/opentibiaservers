import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-client-canada');
}

export default function OldSchoolClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-client-canada" />;
}
