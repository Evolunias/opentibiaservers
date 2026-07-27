import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-ot');
}

export default function NoResetZezeniaOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-ot" />;
}
