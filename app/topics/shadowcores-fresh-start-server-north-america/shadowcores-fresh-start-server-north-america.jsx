import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-fresh-start-server-north-america');
}

export default function ShadowcoresFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-fresh-start-server-north-america" />;
}
