import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-retro-server-germany');
}

export default function VenoreotRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-retro-server-germany" />;
}
