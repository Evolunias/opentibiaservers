import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-official');
}

export default function NoResetZezeniaOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-official" />;
}
