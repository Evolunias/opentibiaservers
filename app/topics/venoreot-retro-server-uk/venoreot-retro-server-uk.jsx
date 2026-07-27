import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-retro-server-uk');
}

export default function VenoreotRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-retro-server-uk" />;
}
