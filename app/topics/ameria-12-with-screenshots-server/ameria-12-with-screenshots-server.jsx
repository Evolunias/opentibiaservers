import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-with-screenshots-server');
}

export default function Ameria12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-with-screenshots-server" />;
}
