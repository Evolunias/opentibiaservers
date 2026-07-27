import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-server');
}

export default function AlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-server" />;
}
