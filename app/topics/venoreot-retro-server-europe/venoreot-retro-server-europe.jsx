import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-retro-server-europe');
}

export default function VenoreotRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-retro-server-europe" />;
}
