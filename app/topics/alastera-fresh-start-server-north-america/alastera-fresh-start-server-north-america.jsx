import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fresh-start-server-north-america');
}

export default function AlasteraFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-fresh-start-server-north-america" />;
}
