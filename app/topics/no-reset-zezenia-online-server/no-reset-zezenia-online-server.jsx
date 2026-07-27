import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-server');
}

export default function NoResetZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-server" />;
}
