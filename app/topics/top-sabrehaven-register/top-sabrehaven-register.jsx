import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-register');
}

export default function TopSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-register" />;
}
