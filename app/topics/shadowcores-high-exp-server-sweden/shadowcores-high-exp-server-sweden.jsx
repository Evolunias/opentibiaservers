import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-high-exp-server-sweden');
}

export default function ShadowcoresHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-high-exp-server-sweden" />;
}
