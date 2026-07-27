import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-private-server');
}

export default function OldSchoolOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-private-server" />;
}
