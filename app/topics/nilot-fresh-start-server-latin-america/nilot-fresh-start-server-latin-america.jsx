import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-latin-america');
}

export default function NilotFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-latin-america" />;
}
