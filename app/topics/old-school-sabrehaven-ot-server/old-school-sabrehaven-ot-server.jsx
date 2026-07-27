import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-ot-server');
}

export default function OldSchoolSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-ot-server" />;
}
