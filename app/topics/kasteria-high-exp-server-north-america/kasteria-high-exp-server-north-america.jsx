import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-high-exp-server-north-america');
}

export default function KasteriaHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-high-exp-server-north-america" />;
}
