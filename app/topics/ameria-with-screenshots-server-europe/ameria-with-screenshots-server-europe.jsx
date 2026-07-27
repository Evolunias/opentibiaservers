import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-screenshots-server-europe');
}

export default function AmeriaWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-screenshots-server-europe" />;
}
