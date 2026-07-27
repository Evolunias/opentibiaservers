import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-server');
}

export default function OldSchoolSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-server" />;
}
