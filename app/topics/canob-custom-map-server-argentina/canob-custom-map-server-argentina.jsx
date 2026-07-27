import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-server-argentina');
}

export default function CanobCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-server-argentina" />;
}
