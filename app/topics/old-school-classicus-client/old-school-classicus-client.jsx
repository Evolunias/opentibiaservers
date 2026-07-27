import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-client');
}

export default function OldSchoolClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-client" />;
}
