import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-screenshots-server-mexico');
}

export default function AmeriaWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-screenshots-server-mexico" />;
}
