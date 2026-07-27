import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-register');
}

export default function NoResetTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-register" />;
}
