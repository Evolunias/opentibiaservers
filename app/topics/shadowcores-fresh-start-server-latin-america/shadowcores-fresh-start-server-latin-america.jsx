import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-fresh-start-server-latin-america');
}

export default function ShadowcoresFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-fresh-start-server-latin-america" />;
}
