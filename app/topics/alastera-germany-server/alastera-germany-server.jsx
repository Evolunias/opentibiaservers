import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-germany-server');
}

export default function AlasteraGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-germany-server" />;
}
