import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-ot-server');
}

export default function OldSchoolCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-ot-server" />;
}
