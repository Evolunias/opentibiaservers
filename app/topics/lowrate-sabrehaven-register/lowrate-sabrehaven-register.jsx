import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-register');
}

export default function LowrateSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-register" />;
}
