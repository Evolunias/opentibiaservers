import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-fresh-start-server-argentina');
}

export default function VenoreotFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-fresh-start-server-argentina" />;
}
