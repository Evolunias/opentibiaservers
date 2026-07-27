import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-register');
}

export default function OldSchoolTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-register" />;
}
