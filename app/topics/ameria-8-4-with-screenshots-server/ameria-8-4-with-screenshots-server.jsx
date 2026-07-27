import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-4-with-screenshots-server');
}

export default function Ameria84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-4-with-screenshots-server" />;
}
