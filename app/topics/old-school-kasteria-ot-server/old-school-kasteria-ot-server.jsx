import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-ot-server');
}

export default function OldSchoolKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-ot-server" />;
}
