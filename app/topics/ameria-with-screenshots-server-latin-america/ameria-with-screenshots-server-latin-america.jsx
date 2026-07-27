import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-screenshots-server-latin-america');
}

export default function AmeriaWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-screenshots-server-latin-america" />;
}
