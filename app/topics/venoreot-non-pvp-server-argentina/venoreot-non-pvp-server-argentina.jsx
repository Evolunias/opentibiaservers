import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-non-pvp-server-argentina');
}

export default function VenoreotNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-non-pvp-server-argentina" />;
}
