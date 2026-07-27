import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-private-server');
}

export default function OldSchoolSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-private-server" />;
}
