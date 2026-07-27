import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online');
}

export default function NoResetZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online" />;
}
