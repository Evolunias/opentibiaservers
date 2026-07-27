import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-server');
}

export default function OldSchoolKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-server" />;
}
