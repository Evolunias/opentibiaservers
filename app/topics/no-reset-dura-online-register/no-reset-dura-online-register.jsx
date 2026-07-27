import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-register');
}

export default function NoResetDuraOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-register" />;
}
