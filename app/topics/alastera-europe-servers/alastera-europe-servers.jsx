import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-europe-servers');
}

export default function AlasteraEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-europe-servers" />;
}
