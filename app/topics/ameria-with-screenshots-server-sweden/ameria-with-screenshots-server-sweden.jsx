import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-screenshots-server-sweden');
}

export default function AmeriaWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-screenshots-server-sweden" />;
}
