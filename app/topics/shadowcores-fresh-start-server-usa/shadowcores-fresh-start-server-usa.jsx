import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-fresh-start-server-usa');
}

export default function ShadowcoresFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-fresh-start-server-usa" />;
}
