import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-fresh-start-server-north-america');
}

export default function KasteriaFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-fresh-start-server-north-america" />;
}
