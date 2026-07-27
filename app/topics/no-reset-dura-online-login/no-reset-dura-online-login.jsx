import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-login');
}

export default function NoResetDuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-login" />;
}
