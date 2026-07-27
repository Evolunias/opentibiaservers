import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-low-exp-server-sweden');
}

export default function AlasteraLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-low-exp-server-sweden" />;
}
