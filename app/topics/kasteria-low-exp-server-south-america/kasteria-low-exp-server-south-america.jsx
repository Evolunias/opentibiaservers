import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-low-exp-server-south-america');
}

export default function KasteriaLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-low-exp-server-south-america" />;
}
