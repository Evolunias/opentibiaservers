import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-fresh-start-server-latin-america');
}

export default function UnlineFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-fresh-start-server-latin-america" />;
}
