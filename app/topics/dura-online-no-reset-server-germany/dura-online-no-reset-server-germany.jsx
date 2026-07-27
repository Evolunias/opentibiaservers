import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-no-reset-server-germany');
}

export default function DuraOnlineNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-no-reset-server-germany" />;
}
