import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-retro-server-poland');
}

export default function VenoreotRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-retro-server-poland" />;
}
