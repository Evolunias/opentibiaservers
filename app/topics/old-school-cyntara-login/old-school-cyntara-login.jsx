import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-login');
}

export default function OldSchoolCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-login" />;
}
