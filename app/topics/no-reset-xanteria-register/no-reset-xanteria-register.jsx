import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-register');
}

export default function NoResetXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-register" />;
}
