import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-poland-server');
}

export default function AlasteraPolandServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-poland-server" />;
}
