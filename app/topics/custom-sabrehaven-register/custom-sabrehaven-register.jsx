import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-register');
}

export default function CustomSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-register" />;
}
