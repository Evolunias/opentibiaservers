import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online-login');
}

export default function OldSchoolZezeniaOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online-login" />;
}
