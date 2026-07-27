import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-0-with-screenshots-server');
}

export default function Ameria80WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-0-with-screenshots-server" />;
}
