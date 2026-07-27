import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-screenshots-server-usa');
}

export default function AmeriaWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-screenshots-server-usa" />;
}
