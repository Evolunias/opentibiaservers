import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-fresh-start-server-latin-america');
}

export default function MidhemFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-fresh-start-server-latin-america" />;
}
