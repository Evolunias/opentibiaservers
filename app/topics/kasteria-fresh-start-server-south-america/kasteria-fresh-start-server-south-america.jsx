import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-fresh-start-server-south-america');
}

export default function KasteriaFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-fresh-start-server-south-america" />;
}
