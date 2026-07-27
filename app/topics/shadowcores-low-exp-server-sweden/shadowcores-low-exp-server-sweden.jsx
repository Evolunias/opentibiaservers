import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-low-exp-server-sweden');
}

export default function ShadowcoresLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-low-exp-server-sweden" />;
}
