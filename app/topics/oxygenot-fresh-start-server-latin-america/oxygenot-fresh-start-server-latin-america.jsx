import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fresh-start-server-latin-america');
}

export default function OxygenotFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fresh-start-server-latin-america" />;
}
