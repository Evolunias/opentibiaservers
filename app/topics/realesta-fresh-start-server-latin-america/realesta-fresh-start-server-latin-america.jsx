import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fresh-start-server-latin-america');
}

export default function RealestaFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-fresh-start-server-latin-america" />;
}
