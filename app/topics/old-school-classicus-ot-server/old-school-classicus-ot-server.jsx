import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-ot-server');
}

export default function OldSchoolClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-ot-server" />;
}
