import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-with-screenshots-server');
}

export default function Ameria13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-with-screenshots-server" />;
}
