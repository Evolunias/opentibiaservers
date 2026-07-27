import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-argentina-server');
}

export default function AlasteraArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-argentina-server" />;
}
