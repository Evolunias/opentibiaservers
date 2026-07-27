import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-europe-server');
}

export default function AlasteraEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-europe-server" />;
}
