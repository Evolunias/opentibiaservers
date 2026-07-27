import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-register');
}

export default function BestSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-register" />;
}
