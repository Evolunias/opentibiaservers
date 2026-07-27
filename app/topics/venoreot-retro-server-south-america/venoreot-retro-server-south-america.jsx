import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-retro-server-south-america');
}

export default function VenoreotRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-retro-server-south-america" />;
}
