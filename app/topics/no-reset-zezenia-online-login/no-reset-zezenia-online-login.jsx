import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-login');
}

export default function NoResetZezeniaOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-login" />;
}
