import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-register');
}

export default function NoResetZezeniaOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-register" />;
}
