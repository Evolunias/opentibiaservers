import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-client');
}

export default function OldSchoolRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-client" />;
}
