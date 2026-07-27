import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-website');
}

export default function AmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="ameria-website" />;
}
