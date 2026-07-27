import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-argentina');
}

export default function VenoreotPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-argentina" />;
}
