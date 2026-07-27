import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-screenshots-server-north-america');
}

export default function AmeriaWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-screenshots-server-north-america" />;
}
