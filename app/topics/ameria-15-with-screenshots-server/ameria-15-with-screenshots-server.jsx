import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-with-screenshots-server');
}

export default function Ameria15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-with-screenshots-server" />;
}
