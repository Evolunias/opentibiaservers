import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-private-server');
}

export default function OldSchoolCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-private-server" />;
}
