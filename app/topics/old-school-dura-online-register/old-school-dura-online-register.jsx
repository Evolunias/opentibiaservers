import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-register');
}

export default function OldSchoolDuraOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-register" />;
}
