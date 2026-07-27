import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-fresh-start-server-mexico');
}

export default function ShadowcoresFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-fresh-start-server-mexico" />;
}
