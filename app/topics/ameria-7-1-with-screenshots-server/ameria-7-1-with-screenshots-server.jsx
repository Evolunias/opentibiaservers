import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-with-screenshots-server');
}

export default function Ameria71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-with-screenshots-server" />;
}
