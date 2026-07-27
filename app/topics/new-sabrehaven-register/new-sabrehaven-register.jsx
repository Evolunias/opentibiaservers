import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-register');
}

export default function NewSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-register" />;
}
