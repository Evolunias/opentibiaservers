import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-ots');
}

export default function NoResetZezeniaOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-ots" />;
}
