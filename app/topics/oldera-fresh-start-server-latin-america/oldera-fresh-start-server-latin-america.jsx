import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fresh-start-server-latin-america');
}

export default function OlderaFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-fresh-start-server-latin-america" />;
}
