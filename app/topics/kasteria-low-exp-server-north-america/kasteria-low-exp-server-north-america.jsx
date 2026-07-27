import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-low-exp-server-north-america');
}

export default function KasteriaLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-low-exp-server-north-america" />;
}
