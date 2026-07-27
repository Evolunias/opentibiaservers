import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-fresh-start-server-canada');
}

export default function ShadowcoresFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-fresh-start-server-canada" />;
}
