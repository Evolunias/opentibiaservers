import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-login');
}

export default function PopularMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-login" />;
}
