import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta');
}

export default function OldSchoolRealestaKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta" />;
}
