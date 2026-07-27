import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-register');
}

export default function PopularMarolaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-register" />;
}
