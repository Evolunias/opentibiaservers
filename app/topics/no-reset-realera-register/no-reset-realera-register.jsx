import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-register');
}

export default function NoResetRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-register" />;
}
