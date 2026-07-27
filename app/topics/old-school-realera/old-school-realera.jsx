import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera');
}

export default function OldSchoolRealeraKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera" />;
}
