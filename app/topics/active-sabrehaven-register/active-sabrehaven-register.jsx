import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-register');
}

export default function ActiveSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-register" />;
}
