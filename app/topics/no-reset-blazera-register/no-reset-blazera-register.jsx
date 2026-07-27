import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-register');
}

export default function NoResetBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-register" />;
}
