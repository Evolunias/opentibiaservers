import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-canada-server');
}

export default function AlasteraCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-canada-server" />;
}
