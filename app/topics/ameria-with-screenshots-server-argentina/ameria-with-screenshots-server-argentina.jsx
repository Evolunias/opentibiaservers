import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-screenshots-server-argentina');
}

export default function AmeriaWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-screenshots-server-argentina" />;
}
