import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-high-exp-server-south-america');
}

export default function KasteriaHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-high-exp-server-south-america" />;
}
