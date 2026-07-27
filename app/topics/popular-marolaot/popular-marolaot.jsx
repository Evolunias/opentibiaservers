import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot');
}

export default function PopularMarolaotKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot" />;
}
