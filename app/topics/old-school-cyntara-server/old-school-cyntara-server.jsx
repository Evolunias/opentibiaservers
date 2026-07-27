import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-server');
}

export default function OldSchoolCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-server" />;
}
