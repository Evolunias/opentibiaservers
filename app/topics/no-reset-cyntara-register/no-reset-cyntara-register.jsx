import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-register');
}

export default function NoResetCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-register" />;
}
