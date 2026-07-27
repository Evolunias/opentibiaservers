import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-ots');
}

export default function NoResetDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-ots" />;
}
