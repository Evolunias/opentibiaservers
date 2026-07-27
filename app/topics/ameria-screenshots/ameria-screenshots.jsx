import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-screenshots');
}

export default function AmeriaScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="ameria-screenshots" />;
}
