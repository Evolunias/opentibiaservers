import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-fresh-start-server-sweden');
}

export default function ShadowcoresFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-fresh-start-server-sweden" />;
}
