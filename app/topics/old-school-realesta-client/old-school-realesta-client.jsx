import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-client');
}

export default function OldSchoolRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-client" />;
}
