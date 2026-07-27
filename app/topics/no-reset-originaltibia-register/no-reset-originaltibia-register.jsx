import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-register');
}

export default function NoResetOriginaltibiaRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-register" />;
}
