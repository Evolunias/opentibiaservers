import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online-register');
}

export default function OldSchoolZezeniaOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online-register" />;
}
