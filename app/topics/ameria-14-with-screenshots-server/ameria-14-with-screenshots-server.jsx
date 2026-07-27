import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-with-screenshots-server');
}

export default function Ameria14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-with-screenshots-server" />;
}
