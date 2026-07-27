import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-client');
}

export default function NoResetZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-client" />;
}
