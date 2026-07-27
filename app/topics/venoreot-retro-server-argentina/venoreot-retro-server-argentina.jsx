import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-retro-server-argentina');
}

export default function VenoreotRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-retro-server-argentina" />;
}
