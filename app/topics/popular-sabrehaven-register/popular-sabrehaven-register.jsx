import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-register');
}

export default function PopularSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-register" />;
}
