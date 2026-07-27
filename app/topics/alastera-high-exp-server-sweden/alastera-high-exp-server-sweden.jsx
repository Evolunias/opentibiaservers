import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-sweden');
}

export default function AlasteraHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-sweden" />;
}
