import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-client');
}

export default function OldSchoolKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-client" />;
}
