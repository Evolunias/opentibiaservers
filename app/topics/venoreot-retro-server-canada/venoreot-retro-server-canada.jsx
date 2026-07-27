import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-retro-server-canada');
}

export default function VenoreotRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-retro-server-canada" />;
}
