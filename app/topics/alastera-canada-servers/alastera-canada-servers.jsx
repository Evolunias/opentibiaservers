import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-canada-servers');
}

export default function AlasteraCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-canada-servers" />;
}
