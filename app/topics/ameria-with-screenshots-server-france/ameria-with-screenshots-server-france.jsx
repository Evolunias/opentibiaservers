import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-screenshots-server-france');
}

export default function AmeriaWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-screenshots-server-france" />;
}
