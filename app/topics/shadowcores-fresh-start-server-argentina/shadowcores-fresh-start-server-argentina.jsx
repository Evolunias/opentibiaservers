import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-fresh-start-server-argentina');
}

export default function ShadowcoresFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-fresh-start-server-argentina" />;
}
