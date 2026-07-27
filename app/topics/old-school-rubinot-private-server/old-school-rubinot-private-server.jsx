import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-private-server');
}

export default function OldSchoolRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-private-server" />;
}
