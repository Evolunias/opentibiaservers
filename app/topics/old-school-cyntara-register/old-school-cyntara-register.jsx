import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-register');
}

export default function OldSchoolCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-register" />;
}
