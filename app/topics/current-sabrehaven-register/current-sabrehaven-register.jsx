import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-register');
}

export default function CurrentSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-register" />;
}
